import { PlusCircledIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { AlbumArtwork } from '@/app/product/[productName]/components/album-artwork';
import {
  listenNowAlbums,
  madeForYouAlbums,
} from '@/app/product/[productName]/data/albums';

export interface ProductPageProps {
  params: {
    productName: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  return (
    <>
      <div className="space-between flex items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
        <div className="ml-auto mr-4">
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            리뷰 작성
          </Button>
        </div>
      </div>

      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {listenNowAlbums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
        <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {madeForYouAlbums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default ProductPage;
