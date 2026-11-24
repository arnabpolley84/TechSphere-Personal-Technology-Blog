import { BlogPost } from '../types/blog';

export const BLOG_CATEGORIES = [
  'AI & Systems',
  'Web Engineering',
  'Cloud & DevOps',
  'Cybersecurity',
  'Hardware',
] as const;

export const COVER_IMAGE_PRESETS: Record<string, string> = {
  'AI & Systems': '/src/assets/images/post_ai_systems_1795493114902.jpg',
  'Web Engineering': '/src/assets/images/post_web_architecture_1795493114760.jpg',
  'Cloud & DevOps': '/src/assets/images/post_cloud_infra_1795493114877.jpg',
  Cybersecurity: '/src/assets/images/post_cybersecurity_1795493115438.jpg',
  Hardware: '/src/assets/images/post_edge_hardware_1795493116978.jpg',
};

export const HERO_IMAGE = '/src/assets/images/hero_tech_workspace_1795493113836.jpg';

export const STORAGE_KEY = 'techsphere_blog_posts_v1';

export const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 'local-first-web-architecture',
    title: 'Why Local-First Architecture Is Reshaping Modern Web Apps',
    description:
      'Exploring how client-side state, optimistic updates, and browser storage eliminate loading spinners while keeping data resilient.',
    category: 'Web Engineering',
    author: 'Maya Lin',
    date: 'November 18, 2026',
    readTime: '6 min read',
    image: COVER_IMAGE_PRESETS['Web Engineering'],
    content: `For over a decade, standard web applications followed a predictable loop: click a button, wait for a network round trip, watch a spinner, and finally see updated UI. While cloud APIs simplified multi-device syncing, they also introduced latency into every everyday interaction.

## Instant Responsiveness as a Baseline

Local-first software flips that relationship. Instead of treating the browser as a thin display terminal for a remote database, the application reads and writes directly to fast local storage first and synchronizes with remote servers quietly in the background.

When state lives close to the user, transitions feel immediate. Filtering a list of articles, drafting a technical note, or switching views happens within a single frame rather than waiting hundreds of milliseconds on cellular connections.

## Practical Patterns for React Developers

You do not need a complex distributed database to apply local-first principles in smaller projects. Cleanly separating your UI components from a storage layer built on localStorage or IndexedDB already removes unnecessary network friction.

Keep your state predictable with React hooks like useState and useEffect, serialize updates cleanly, and design your interfaces so users can work offline or across refreshes without losing progress.`,
  },
  {
    id: 'efficient-inference-silicon',
    title: 'Inside Low-Power Silicon: Running Language Models at the Edge',
    description:
      'How unified memory bandwidth and 4-bit quantization enable fast on-device inference without relying on massive data center clusters.',
    category: 'AI & Systems',
    author: 'Arjun Patel',
    date: 'November 14, 2026',
    readTime: '7 min read',
    image: COVER_IMAGE_PRESETS['AI & Systems'],
    content: `Running capable neural networks used to mean provisioning expensive cloud GPUs and paying per-token network overhead. Over the past two years, hardware design and model compression have converged to bring meaningful inference directly onto laptops and compact edge nodes.

## Memory Bandwidth Is the True Bottleneck

Unlike training, which saturates raw compute cores with massive parallel batches, autoregressive text generation is overwhelmingly memory-bandwidth bound. Every generated token requires streaming model weights from memory into compute units.

Modern unified memory architectures dramatically reduce the penalty of moving tensors between CPU and GPU accelerators. Combined with tighter thermal envelopes, compact workstations can now sustain smooth token rates quietly at a desk.

## Quantization Without Quality Collapse

Trimming 16-bit floating-point weights down to 4-bit integer representations cuts memory footprints by roughly seventy percent. Carefully calibrated group quantization preserves reasoning accuracy while unlocking models that comfortably fit inside standard consumer RAM.

For developers building privacy-sensitive tools, local inference eliminates external API latency and keeps user documents entirely on the host machine.`,
  },
  {
    id: 'zero-downtime-cloud-migrations',
    title: 'Zero-Downtime Container Rollouts Without Over-Engineering',
    description:
      'A practical guide to health checks, graceful connection draining, and predictable blue-green deployments for small engineering teams.',
    category: 'Cloud & DevOps',
    author: 'Elena Rostova',
    date: 'November 9, 2026',
    readTime: '5 min read',
    image: COVER_IMAGE_PRESETS['Cloud & DevOps'],
    content: `Many small teams assume zero-downtime deployments require sprawling service meshes and dozens of configuration manifests. In reality, reliable rollouts come down to three disciplined fundamentals: readiness probes, graceful shutdowns, and immutable builds.

## Readiness Before Traffic

A container starting up is rarely ready to serve traffic on millisecond one. Separating liveness checks from readiness checks ensures your load balancer only routes requests after database pools, caches, and environment configs are fully initialized.

## Graceful Connection Draining

When replacing an older instance, sending an immediate termination signal drops active HTTP requests mid-flight. Listening for SIGTERM in your server entry point, stopping new connections, and allowing in-flight responses thirty seconds to finish eliminates mysterious 502 errors during busy afternoons.

Simple, observable pipelines always outperform complex orchestration setups that nobody on the team enjoys debugging at two in the morning.`,
  },
  {
    id: 'passkeys-and-hardware-security',
    title: 'Passkeys and Hardware Tokens: Moving Beyond Password Fatigue',
    description:
      'Breaking down public-key cryptography in the browser and why WebAuthn makes phishing-resistant sign-ins practical for everyday apps.',
    category: 'Cybersecurity',
    author: 'Daniel Okafor',
    date: 'November 3, 2026',
    readTime: '6 min read',
    image: COVER_IMAGE_PRESETS['Cybersecurity'],
    content: `Traditional passwords ask humans to memorize high-entropy secrets and verify domain names manually under pressure. Even SMS two-factor codes remain vulnerable to SIM swapping and convincing real-time phishing proxies.

## Cryptographic Binding to Origins

WebAuthn and passkeys solve both problems at the protocol level. When you register a hardware security key or device biometric passkey, your authenticator generates a unique asymmetric key pair tied strictly to the exact domain origin.

Even if an attacker clones a login page on a lookalike URL, the browser refuses to sign the challenge because the origin does not match. There is no shared secret for a server breach to leak and no static code for a user to mistype.

## Designing Calm Recovery Flows

Adopting passkeys successfully requires thoughtful fallback paths. Encouraging users to register a secondary hardware backup key or cross-device sync keeps account recovery straightforward without falling back to weak security questions.`,
  },
  {
    id: 'custom-arm-edge-gateways',
    title: 'Designing Fanless ARM Gateways for Industrial Telemetry',
    description:
      'Lessons learned building quiet, solid-state edge compute nodes capable of surviving continuous sensor workloads in remote environments.',
    category: 'Hardware',
    author: 'Marcus Vance',
    date: 'October 27, 2026',
    readTime: '5 min read',
    image: COVER_IMAGE_PRESETS['Hardware'],
    content: `Edge hardware rarely fails because of slow processors. In field deployments, mechanical fans clog with dust, loose power connectors vibrate free, and cheap flash storage wears out under unbuffered logging.

## Passive Thermal Enclosures

Using the anodized aluminum chassis itself as a precision heat sink removes moving parts entirely. Routing thermal pads directly from the system-on-chip to machined exterior fins keeps junction temperatures stable even inside sealed cabinets.

## Protecting Flash Storage Longevity

Writing raw sensor events every second destroys standard SD cards within months. Buffering telemetry in RAM ring buffers and flushing compressed batches periodically extends solid-state storage lifespan by orders of magnitude.

Reliable hardware design is mostly an exercise in removing fragile assumptions before the enclosure ever leaves the lab.`,
  },
  {
    id: 'composable-css-design-systems',
    title: 'Building Maintainable UI Systems With Semantic Design Tokens',
    description:
      'How structured color roles, typographic scales, and predictable spacing rhythms keep growing frontend codebases clean.',
    category: 'Web Engineering',
    author: 'Maya Lin',
    date: 'October 21, 2026',
    readTime: '4 min read',
    image: COVER_IMAGE_PRESETS['Web Engineering'],
    content: `As web applications grow beyond a handful of pages, ad-hoc hex colors and arbitrary pixel margins quickly turn simple redesigns into fragile scavenger hunts. Semantic design tokens give teams a shared vocabulary between design and code.

## Naming Intent Instead of Appearance

Instead of hardcoding specific shade numbers across thirty components, define roles like primary surface, muted text, hairline border, and primary action accent. When every card and button references consistent tokens, adjusting contrast or refreshing a brand accent takes minutes instead of days.

## Restraint Creates Clarity

The cleanest interfaces rarely rely on heavy drop shadows or stacked borders. Letting generous whitespace, clear typographic hierarchy, and a single focused accent color guide the reader makes technical content effortless to scan.`,
  },
];

export function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180));
  return `${minutes} min read`;
}

export function loadPostsFromStorage(): BlogPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_POSTS));
      return SAMPLE_POSTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // Fall back to default sample posts if localStorage is unavailable
  }
  return SAMPLE_POSTS;
}

export function savePostsToStorage(posts: BlogPost[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch {
    // Ignore storage quota errors gracefully
  }
}
