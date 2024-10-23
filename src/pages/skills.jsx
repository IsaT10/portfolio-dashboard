import { Icons } from '@/components/icons';
import { UpdateSkillModal } from '@/components/skill/update-skill-modal';
import { useGetSkill } from '@/hooks/skill.hook';

export default function Skills() {
  const { data, isLoading, error } = useGetSkill();
  return (
    <div>
      <UpdateSkillModal skill={data?.data} />
      <h2 className='text-xl font-semibold my-10'>Skills</h2>
      <div className='grid sm:grid-cols-2 gap-y-8 xl:grid-cols-3 gap-x-8'>
        <div className='border rounded-lg p-10 border-stone-400'>
          <p className='text-xl font-semibold mb-6'>Frontend</p>
          {data?.data?.frontend?.map((item, idx) => (
            <div key={idx} className='flex gap-2 items-center py-1.5'>
              <Icons.checkBadge />
              <p className='text-lg leading-none font-medium'>{item}</p>
            </div>
          ))}
        </div>
        <div className='border rounded-lg p-10 border-stone-400'>
          <p className='text-xl font-semibold mb-6'>Backend</p>
          {data?.data?.backend?.map((item, idx) => (
            <div key={idx} className='flex gap-2 items-center py-1.5'>
              <Icons.checkBadge />
              <p className='text-lg leading-none font-medium'>{item}</p>
            </div>
          ))}
        </div>
        <div className='border rounded-lg p-10 border-stone-400'>
          <p className='text-xl font-semibold mb-6'>Soft skills</p>
          {data?.data?.softSkill?.map((item, idx) => (
            <div key={idx} className='flex gap-2 items-center py-1.5'>
              <Icons.checkBadge />
              <p className='text-lg leading-none font-medium'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
