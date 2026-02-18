export default function StatsGrid() {
  const stats = [
    { label: "Youth Empowered", value: "15k+", color: "bg-fih-charcoal" },
    { label: "Women Participation", value: "55%", color: "bg-fih-silver/20 text-fih-white" },
    { label: "PWD Inclusion", value: "6%", color: "bg-fih-silver text-fih-black" },
    { label: "States Reached", value: "36", color: "bg-fih-charcoal/50 border border-fih-silver/20" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto md:mx-0 mt-8 md:mt-0">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} p-6 rounded-3xl flex flex-col justify-between aspect-square backdrop-blur-sm transition-transform hover:scale-105 duration-300`}
        >
          <span className="text-4xl font-display font-bold tracking-tighter">{stat.value}</span>
          <span className="text-xs font-medium uppercase tracking-widest opacity-80">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
