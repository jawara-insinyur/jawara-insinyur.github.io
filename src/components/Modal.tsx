import { PortfolioCardProps } from "./card/PortfolioCard.tsx";

import {
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "./dialog.tsx";

type DownloadProps = {
  name: string;
  asset: string;
};

const download: DownloadProps[] = [
  {
    name: "Play Store",
    asset: "/logos/play_store.svg",
  },
  {
    name: "Github",
    asset: "/logos/github.svg",
  },
];

export default function ModalPortfolio({
  props,
}: {
  props: PortfolioCardProps;
}) {
  return (
    <DialogContent className="bg-transparent backdrop-blur">
      <DialogHeader>
        <DialogTitle className="hidden">{props.name}</DialogTitle>
        <div className="space-y-8">
          <div className="flex gap-6 whitespace-pre-wrap">
            <img src={props.icon} className="aspect-square size-60" />
            <DialogDescription className="text-lg text-white">
              {props?.desc ? props.desc : "Deskripsi Kosong"}
            </DialogDescription>
          </div>
          <div className="flex justify-between gap-6">
            <div className="flex w-[300px] flex-col justify-between space-y-4 font-medium">
              <div className="space-y-2">
                <h2 className="text-center text-xl font-medium">
                  {props.name}
                </h2>
                <div className="flex flex-col gap-4 text-black">
                  {download.map((item, index) => (
                    <a
                      key={index}
                      className="flex w-full justify-center gap-2 rounded-3xl bg-white py-3 hover:cursor-pointer"
                    >
                      <img src={item.asset} />
                      <h2>{item.name}</h2>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col space-y-2 text-white">
                {props.developers && (
                  <h2 className="text-xl font-medium">Developers</h2>
                )}
                <div className="flex gap-2">
                  {props.developers ? (
                    props.developers?.map((developer, index) => (
                      <a href={developer.href}>
                        <img
                          key={index}
                          src={developer.path}
                          className="size-12 rounded-full"
                        />
                      </a>
                    ))
                  ) : (
                    <h1>Developer Kosong</h1>
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-2 text-center text-xl font-medium">
              {props.overviewImg && <h1>Overview Aplikasi</h1>}
              <div className="flex justify-center">
                {props.overviewImg ? (
                  props.overviewImg.map((src) => <img src={src} />)
                ) : (
                  <h1 className="text-center">Overview Kosong</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
