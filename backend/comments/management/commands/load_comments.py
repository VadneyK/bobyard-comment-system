import json
import os
from django.core.management.base import BaseCommand
from django.utils.dateparse import parse_datetime
from comments.models import Comment


class Command(BaseCommand):
    help = 'Load comments from JSON file'

    def handle(self, *args, **options):
        # Path to the JSON file
        json_file_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))), 'comments.json')
        
        if not os.path.exists(json_file_path):
            self.stdout.write(self.style.ERROR(f'JSON file not found at {json_file_path}'))
            return
        
        with open(json_file_path, 'r') as file:
            data = json.load(file)
        
        comments_created = 0
        for comment_data in data['comments']:
            # Check if comment already exists
            if not Comment.objects.filter(id=comment_data['id']).exists():
                date = parse_datetime(comment_data['date'])
                comment = Comment.objects.create(
                    id=comment_data['id'],
                    author=comment_data['author'],
                    text=comment_data['text'],
                    date=date,
                    likes=comment_data['likes'],
                    image=comment_data['image'] if comment_data['image'] else None
                )
                comments_created += 1
                self.stdout.write(f'Created comment: {comment.author} - {comment.text[:50]}...')
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully loaded {comments_created} comments')
        )