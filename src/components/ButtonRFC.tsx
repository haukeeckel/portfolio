import { classNames } from '../util/classNames';
import { ButtonProps, Color, Size, Weight } from '../compiler/types';

const COLOR_MAPS: Record<Color, string> = {
  [Color.ROSE]: `focus:ring-rose-500 bg-rose-500 hover:bg-rose-600`,
  [Color.YELLOW]: `focus:ring-yellow-500 bg-yellow-500 hover:bg-yellow-600`,
  [Color.GREEN]: 'focus:ring-green-500 bg-green-500 hover:bg-green-600',
};

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'px-4 py-2 text-sm',
  [Size.LARGE]: 'px-6 py-3 text-base',
};

const WEIGHT_MAPS: Record<Weight, string> = {
  [Weight.REGULAR]: 'font-normal',
  [Weight.BOLD]: 'font-bold',
  [Weight.EXTRABOLD]: 'font-extrabold',
};

export default function ButtonRFC(props: ButtonProps) {
  const { color, size, weight, handler, children } = props;
  return (
    <button
      onClick={e => handler(e)}
      className={classNames(
        'inline-flex items-center border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 max-h-max',
        COLOR_MAPS[color],
        SIZE_MAPS[size],
        WEIGHT_MAPS[weight]
      )}
    >
      {children}
    </button>
  );
}

ButtonRFC.defaultProps = {
  variant: Color.ROSE,
  size: Size.SMALL,
  weight: Weight.REGULAR,
};

ButtonRFC.color = Color;
ButtonRFC.size = Size;
ButtonRFC.weight = Weight;
