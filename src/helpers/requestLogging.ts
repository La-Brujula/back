import Logger from "@/providers/Logger";
import { Request, Response } from "express";

export default function requestLog(tokens: any, req: Request, res: Response) {
  const { statusCode } = res;
  const { method } = req;
  const level = statusCode < 400 ? "debug" : statusCode < 500 ? "warn" : "error";
  Logger.verbose(
    level,
    [
      `${tokens["response-time"](req, res)} ms |`,
      statusCode,
      method,
      decodeURIComponent(req.originalUrl),
    ].join(" "),
  );
  return undefined;
}
