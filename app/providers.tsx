"use client";

import posthog from "posthog-js";
import { PostHogProvider as PostHogWrapper } from "posthog-js/react";
import { useEffect } from "react";
import PostHogPageView from "./PostHogPageView";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: false,
    });
  }, []);

  return (
    <PostHogWrapper client={posthog}>
      <PostHogPageView />
      {children}
    </PostHogWrapper>
  );
}
