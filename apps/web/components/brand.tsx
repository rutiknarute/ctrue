import Link from 'next/link';
import Image from 'next/image';
export function Brand() { return <Link className="brand" href="/" aria-label="Ctrue home"><Image className="brand-logo" src="/logo.png" alt="" width={32} height={32} priority />ctrue</Link>; }
export function Nav() { return <header className="site-nav wrap"><Brand /><nav aria-label="Main navigation"><Link href="/#features">Features</Link><Link href="/downloads">Download</Link></nav><Link href="/dashboard" className="button small">Open workspace</Link></header>; }
export function Footer() { return <footer className="wrap site-footer"><Brand /><div><Link href="/downloads">Downloads</Link><Link href="/login">Account</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></footer>; }
