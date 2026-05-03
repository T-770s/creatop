import { BUSINESSES } from '@/data/businesses';
import BusinessClient from './BusinessClient';

export function generateStaticParams() {
  return BUSINESSES.map(b => ({ slug: b.slug }));
}

export default function BusinessPage({ params }: { params: { slug: string } }) {
  return <BusinessClient slug={params.slug} />;
}
