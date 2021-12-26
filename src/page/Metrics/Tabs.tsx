const tabs = [
  { title: 'Last 24h', value: '24h' },
  { title: '7 days', value: '7d' },
  { title: '30 days', value: '30d' },
];

interface TabsProps {
  selected: string;
  onChangeTab: (val: string) => void;
}

export default function Tabs({ selected, onChangeTab }: TabsProps) {
  const onClick = (val: string) => () => {
    onChangeTab(val);
  };

  console.log('selected', selected);

  return (
    <div className="flex justify-center items-center border border-accent-500 p-1 rounded-lg">
      {tabs.map((item) => {
        return (
          <div
            key={item.title}
            className={`px-4 py-1 cursor-pointer rounded-lg text-sm font-bold ${
              selected === item.value
                ? 'text-white bg-accent-500'
                : 'text-primary-100'
            }`}
            onClick={onClick(item.value)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
