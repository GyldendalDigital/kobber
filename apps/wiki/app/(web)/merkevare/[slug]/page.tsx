type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return [{ slug: "logo" }];
}

export default function MerkevareSlugPage({ params }: Props) {
  return <div>MerkevareSlugPage with slug {params.slug}</div>;
}
