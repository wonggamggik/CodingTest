# 약수의 합

난이도: Level 1
링크: https://school.programmers.co.kr/learn/courses/30/lessons/12928?language=python3#
문제 푼 날짜: 2023/07/12
해결 여부: 문제 해결

## 내가 푼 코드

```python
def solution(n):
    answer = 0
    if n == 1:
        return 1
    
    for i in range(1,int(n**(1/2))+1):
        if n % i == 0:
            answer += i
            answer += n//i
            if i == n//i:
                answer -= i

    return answer
```

## 타인이 푼 코드

### 타인이 푼 방법 1 - 간단한 코드

```python
def solution(n):
    return n + sum([i for i in range(1, (n // 2) + 1) if n % i == 0])
```

나랑 풀이 방식은 동일하나 나보다 더 간단한 코드를 사용하여 풀어냄