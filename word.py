#coding=utf-8
import requests,sys
if sys.getdefaultencoding() != 'utf-8':
   reload(sys)
   sys.setdefaultencoding('utf-8')
r = requests.get('http://www.freeyuming.cn/wordjs')
print r.text
				
