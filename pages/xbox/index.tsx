import { Title, Image, Button } from '@mantine/core';
import useSWR from 'swr'
import Link from 'next/link';
import { XboxTable } from '../../components/XboxTable/XboxTable';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function XboxPage() {
    const { data, error } = useSWR('/api/users', fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  
  return (
    <>
    <Link href="./"><Button mx={10} mt={10} variant="outline" color="cyan" size="md">Back</Button></Link>
    <Image src="./services/xbox-logo.png" color="dimmed" sx={{ maxWidth: 600 }} mx="auto" mt={20} />
    <XboxTable data={data.data}></XboxTable>
    </>
  );
}
