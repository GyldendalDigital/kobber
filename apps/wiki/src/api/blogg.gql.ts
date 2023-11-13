export default `
query SchoolLibrary {
    documents(type: LibraryBookLink, take: 10) {
      _id
      _cultureCode
      _pub
      ...LibraryBookFields
    }
  }
  
  fragment LibraryBookFields on LibraryBookLink {
    author
    bookCultureCodes
    description {
      key
      value
    }
    file {
      ...DamAssetFields
    }
    grades
    hasAudioTrack
    iSBN
    learningMaterials
    releaseYear
    subtitle
    thumbnail {
      ...DamAssetFields
    }
    title
    url
  }
  
  fragment DamAssetFields on DamAsset {
    id
    mimeType
  }
`;
