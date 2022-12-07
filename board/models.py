from django.db import models

# Create your models here.

class Board(models.Model):
    num = models.AutoField(verbose_name="글번호", primary_key=True)
    writer = models.CharField(verbose_name="작성자", null=False, max_length=50)
    subject = models.CharField(verbose_name="글제목", null=False, max_length=300)
    passwd = models.CharField(verbose_name="글비밀번호", null=False, max_length=30)
    content = models.TextField(verbose_name="글내용", null=False)
    readcount = models.IntegerField(verbose_name="조회수", default=0)
    ref = models.IntegerField(verbose_name="그룹화아이디")
    restep = models.IntegerField(verbose_name="글순서")
    relevel = models.IntegerField(verbose_name="글레벨")
    regdate = models.DateTimeField(verbose_name="작성일", auto_now_add=True, blank=True)
    ip = models.CharField(verbose_name="작성자ip", max_length=30)