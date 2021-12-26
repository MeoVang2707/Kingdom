import ContainerBoder from 'src/component/ContainerBorder';
import Icon from 'src/component/Icon';

interface OneItemProps {
  iconName: string;
  label: string;
  iconType?: 'svg' | 'png';
}

export default function OneItem({ iconName, label, iconType }: OneItemProps) {
  return (
    <ContainerBoder className="col-span-1 flex flex-col items-center py-4">
      <Icon name={iconName} className="w-10 h-10" type={iconType} />
      <div className="text-white leading-6 pt-2">{label}</div>
    </ContainerBoder>
  );
}
