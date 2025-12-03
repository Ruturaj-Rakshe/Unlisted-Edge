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
        type="text" placeholder="Search..." className="w-full max-w-md mx-auto mt-10 mb-10"/>
      
    </div>
  )
}


