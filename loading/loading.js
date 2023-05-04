async function loading() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}

export default loading;
