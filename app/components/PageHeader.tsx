import type { ReactNode } from "react";

export default function PageHeader({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-zinc-500 border-opacity-10 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-gray-1000">
      <div className="bg-white dark:bg-black absolute top-0 left-0 right-0 h-1 -z-10" />
      <div className="max-w-4xl mx-auto relative">
        <div className="page-header__breadcrumbs">{children}</div>
        <h1 className="font-black">{title}</h1>
      </div>
    </section>
  );
}
