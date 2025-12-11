"use client";
import { Input } from '@/components/ui/input';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Search(){
    const searchParams = useSearchParams()
    const pathName = usePathname();
    const router = useRouter();

    const handleChange = (query: string) => {
        const Params = new URLSearchParams(searchParams.toString());

        if(query !== ""){
            Params.set("query", query);
        } else {
            Params.delete("query");
        }

        router.replace(`${pathName}?${Params.toString()}`);
    }


  return (
    <div>
        <Input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search Unlisted Companies..."
        type="text" className="w-full border-2 placeholder:text-black placeholder:italic placeholder:bold border-black max-w-md mx-auto mt-10 mb-10"/>
      
    </div>
  )
}


