import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import redis from "@/db/redis";




const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(10 , "1m"),
  analytics: true,
 
  prefix: "@upstash/ratelimit",
});

export default ratelimit