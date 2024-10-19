function solution(record) {
  const userDict = {};
  const messages = [];

  record.forEach((command) => {
    const splitted = command.split(" ");

    if (splitted[0] === "Enter") {
      userDict[splitted[1]] = splitted[2];
      messages.push([splitted[0], splitted[1]]);
    } else if (splitted[0] === "Leave") {
      messages.push([splitted[0], splitted[1]]);
    } else {
      userDict[splitted[1]] = splitted[2];
    }
  });

  return messages.map((message) => {
    return `${userDict[message[1]]}님이 ${
      message[0] === "Enter" ? "들어왔" : "나갔"
    }습니다.`;
  });
}