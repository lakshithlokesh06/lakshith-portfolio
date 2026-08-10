export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || undefined;

export function getMetadataBase() {
  if (!siteUrl) {
    return undefined;
  }

  try {
    return new URL(siteUrl);
  } catch {
    return undefined;
  }
}

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!siteUrl) {
    return normalizedPath;
  }

  return new URL(normalizedPath, `${siteUrl}/`).toString();
}
