# 문자열 내 p와 y의 개수

난이도: Level 1  
링크: https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=python3  
문제 푼 날짜: 2023/07/11  
해결 여부: 문제 해결  

## 내가 푼 코드

```python
def solution(s):
    return True if s.lower().count('p') == s.lower().count('y') else False
```

## 타인이 푼 코드

### 타인이 푼 방법 1 - 간단한 코드

```python
def numPY(s):
    return s.lower().count('p') == s.lower().count('y')
```

생각해 보니까 == 을 사용하면 어차피 True, Fasle로 반환하는데 왜 if문을 썻을까?
