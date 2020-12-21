let executionCount = 0;

setInterval(() => {
  executionCount += 1;
  console.log(`Execution: ${executionCount}`);
}, 5000);
