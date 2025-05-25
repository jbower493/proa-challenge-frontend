import "./Button.css";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export function Button({ children, onClick }: Props) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
