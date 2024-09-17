import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return [{ slug: "test" }];
}

export default function MerkevareSlugPage({ params }: Props) {
  return <div>MerkevareSlugPage with slug {params.slug}</div>;
}
