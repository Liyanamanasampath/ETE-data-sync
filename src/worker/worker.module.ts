import { Job } from "bullmq";

export async function processOrderJob(job: Job) {
  console.log("Processing job:", job.id, job.data);
  await new Promise((res) => setTimeout(res, 1000));
//   console.log("Order synced:", job.data.orderId);
  return { status: "success" };
}
