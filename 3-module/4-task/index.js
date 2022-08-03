function showSalary(users, age) {
  let result = [];
  users.map((el, index) => {
    if (el.age <= age) {
      result.push(`${el.name}, ${el.balance}`);
    }
  });

  return result.join('\n');
}
