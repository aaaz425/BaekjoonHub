while True:
    num = input()

    if num == '0':
        break

    while len(num) > 1:
        temp = 0

        for number in num:
            temp += int(number)

        num = str(temp)

    print(num)
