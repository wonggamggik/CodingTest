# K번째수

난이도: Level 1  
문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=python3  
문제 푼 날짜: 2023/07/17  
해결 여부: 문제 해결  
 
## 내가 푼 코드

```python
def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        temp = array[commands[i][0]-1:commands[i][1]]
        temp.sort()
        answer.append(temp[commands[i][2]-1])
        
    return answer
```

## 타인이 푼 코드

### 타인이 푼 방법 1 - lambda를 통한 코드

```python
def solution(array, commands):
    return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))
```

lambda를 더 공부해야 할 것 같다.
