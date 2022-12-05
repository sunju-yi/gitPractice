from django.db import models
from member.choice import DEPART_CHOICE

# Create your models here.
class Member(models.Model):
    id = models.CharField(max_length=50, verbose_name="아이디", primary_key=True)
    passwd = models.CharField(max_length=50, verbose_name="비밀번호",null=False)
    name = models.CharField(max_length=50,verbose_name="이름", null=False)
    email = models.EmailField(max_length=50, verbose_name="이메일", null=False)
    tel = models.CharField(max_length=20, verbose_name="전화번호", null=False)
    depart = models.CharField(choices=DEPART_CHOICE, max_length=10, verbose_name="부서")
    logtime = models.DateTimeField(auto_now_add=True, verbose_name="입사일", null=False, blank=True)
    