import prisma from "@/lib/db";

export default async function Home() {
  const test = await prisma.test.findFirstOrThrow({
    where: {
      id: 1,
    },
  });
  return (
    <div>
      Test {test.id.toString()} was created at{" "}
      {test.created_at.toLocaleTimeString()}
    </div>
  );
}
