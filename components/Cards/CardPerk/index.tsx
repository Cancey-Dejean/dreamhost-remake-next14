import SectionTitle from "@/components/atoms/SectionTitle";
import { FaUsers } from "react-icons/fa";

export default function CardPerk() {
  return (
    <div>
      <FaUsers className="mb-2 text-[60px] text-primary" />
      <SectionTitle as="h3" className="text-3xl">
        Employee Owned
      </SectionTitle>
      <p>
        Being employee-owned keeps us focused on the unique needs of our users,
        and we wouldn't have it any other way. We're committed to helping
        everyone find success online.
      </p>
    </div>
  );
}
