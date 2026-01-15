from rest_framework import viewsets, status
from rest_framework.response import Response
from django.utils import timezone
from .models import Comment
from .serializers import CommentSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    
    def create(self, request, *args, **kwargs):
        # Override create to set author to "Admin" and current time
        data = request.data.copy()
        data['author'] = 'Admin'
        data['date'] = timezone.now()
        data['likes'] = 0
        
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
