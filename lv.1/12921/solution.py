#First try from Yejun
def solution(n): # n = 100
    return len(get_prime_list(n))


def get_prime_list(n):
    if n == 0:
        return []
    elif n == 1:
        return []
    elif n == 2:
        return [2]

    prime_list = get_prime_list(int(n ** 0.5))
    result = []
    for i in range(n):
        if i + 1 == 1:  # 1은 뺍니다
            continue

        not_prime = any(map(lambda prime: (i + 1) % prime == 0, prime_list))
        if not not_prime:
            result.append(i + 1)
    return prime_list + result