export type CategoryCardProps = {
  name: string;
  icon: string;
};

export default function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <div>
      <div>{name}</div>
      <div>
        <img src={icon} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
}
