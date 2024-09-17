type Props = {
  value?: number;
};

export function Cell({ value }: Props) {
  const background = () => {
    switch (value) {
      case 0:
        return "bg-zinc-white dark:bg-zinc-900";
      case 1:
        return "bg-zinc-300 dark:bg-zinc-500";
      case 2:
        return "bg-zinc-500 dark:bg-zinc-300";
      case 3:
        return "bg-zinc-700 dark:bg-white";
    }
  };

  return <td className={`border ${background()}`}></td>;
}
