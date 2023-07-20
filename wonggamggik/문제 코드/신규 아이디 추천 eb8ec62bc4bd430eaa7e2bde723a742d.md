# 신규 아이디 추천

난이도: Level 1
문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/72410
문제 푼 날짜: 2023/07/20
해결 여부: 문제 해결

## 내가 푼 코드

```python
def solution(new_id):
    # 1단계
    new_id = new_id.lower()
    
    # 2단계
    delete = "~!@#$%^&*()=+[{]}:?,<>/"
    for i in delete:
        new_id = new_id.replace(i,'')
    
    # 3단계
    while True:
        if new_id.find('..') == -1:
            break
        new_id = new_id.replace('..','.')
    
    # 4단계
    try:
        if new_id[0] == '.':
            new_id = new_id[1:]
        if new_id[-1] == '.':
            new_id = new_id[:-1]
    except:
        pass
    
    # 5단계
    if len(new_id) == 0:
        new_id = 'a'
    
    # 6단계
    if len(new_id) >= 16:
        new_id = new_id[:15]
    try:
        if new_id[0] == '.':
            new_id = new_id[1:]
        if new_id[-1] == '.':
            new_id = new_id[:-1]
    except:
        pass
    
    # 7단계
    if len(new_id) == 1:
        new_id = new_id*3
    elif len(new_id) == 2:
        new_id += new_id[1]
    
    return new_id
```

## 타인이 푼 코드

### 타인이 푼 방법 1 - 정규식을 이용한 풀이

```python
import re

def solution(new_id):
    st = new_id
    st = st.lower()
    st = re.sub('[^a-z0-9\-_.]', '', st)
    st = re.sub('\.+', '.', st)
    st = re.sub('^[.]|[.]$', '', st)
    st = 'a' if len(st) == 0 else st[:15]
    st = re.sub('^[.]|[.]$', '', st)
    st = st if len(st) > 2 else st + "".join([st[-1] for i in range(3-len(st))])
    return st
```

정규식이는 모르겠다. 규식아

### 타인이 푼 방법 2 - 나랑 동일한데 더 간결하게 풀어냄

```python
def solution(new_id):
    answer = ''
    # 1
    new_id = new_id.lower()
    # 2
    for c in new_id:
        if c.isalpha() or c.isdigit() or c in ['-', '_', '.']:
            answer += c
    # 3
    while '..' in answer:
        answer = answer.replace('..', '.')
    # 4
    if answer[0] == '.':
        answer = answer[1:] if len(answer) > 1 else '.'
    if answer[-1] == '.':
        answer = answer[:-1]
    # 5
    if answer == '':
        answer = 'a'
    # 6
    if len(answer) > 15:
        answer = answer[:15]
        if answer[-1] == '.':
            answer = answer[:-1]
    # 7
    while len(answer) < 3:
        answer += answer[-1]
    return answer
```