type Props = {
  params: {
    slug: string;
  };
};

export default function MerkevareSlugPage({ params }: Props) {
  return <div>MerkevareSlugPage with slug {params.slug}</div>;
}
