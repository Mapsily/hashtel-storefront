
import Banner from "./banner";

const SHOW_CATEGORIES = 3;

export default async function CategoryListings() {
  const categories = [];
  const ads = [];

  return Array(SHOW_CATEGORIES)
    .fill(undefined)
    .map((_, idx) => (
      <>
        {ads[idx] && (
          <div className="md:mt-20 mt-12">
            <Banner
              heading={ads[idx].heading}
              title={ads[idx].title}
              subtitle={ads[idx].description}
              endAt={ads[idx].endAt}
              buttonLink={ads[idx].buttonLink}
              buttonName={ads[idx].buttonName}
              bannerImageURL={ads[idx].adImageURL}
              variant="secondary"
            />
          </div>
        )}
  
      </>
    ));
}
