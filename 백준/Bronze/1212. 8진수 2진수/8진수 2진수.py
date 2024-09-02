N = input()
result = []

for num in N:
    temp = bin(int(num))[2:]
    while len(temp) < 3:
        temp = '0' + temp

    result.append(temp)

result = ''.join(result)

if not int(N):
    print(0)
else:
    while result[0] != '1':
        result = result[1:]

    print(result)
