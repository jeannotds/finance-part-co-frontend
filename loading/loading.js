async function loading() {
  await new Promise((resolve) => {
    setTimeout(resolve, 700);
  });
}

export default loading;
