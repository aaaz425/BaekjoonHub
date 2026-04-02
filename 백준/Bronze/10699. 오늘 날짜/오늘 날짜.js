const date = new Date();
date.setHours(date.getHours() + 9);
console.log(date.toISOString().split('T')[0]);