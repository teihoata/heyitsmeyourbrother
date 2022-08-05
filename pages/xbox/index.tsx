import { Title, Image, Button } from '@mantine/core';
import Link from 'next/link';
import { XboxTable } from '../../components/XboxTable/XboxTable';

const data = {
    "data": [
      {
        "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Robert Wolfkisser",
        "country": "New Zealand",
        "subType": "Game Pass Ultimate",
        "numberFree": "1"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Jill Jailbreaker",
        "country": "Australia",
        "subType": "Game Pass Ultimate",
        "numberFree": "2"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Henry Silkeater",
        "country": "New Zealand",
        "subType": "Game Pass Ultimate",
        "numberFree": "1"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Bill Horsefighter",
        "country": "America",
        "subType": "Game Pass Ultimate",
        "numberFree": "3"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Jeremy Footviewer",
        "country": "Australia",
        "subType": "Game Pass Ultimate",
        "numberFree": "2"
      }
    ]
  };

export default function XboxPage() {
  return (
    <>
    <Link href="/"><Button mx={10} mt={10} variant="outline" color="cyan" size="md">Back</Button></Link>
    <Image src="/services/xbox-logo.png" color="dimmed" align="center" size="md" sx={{ maxWidth: 600 }} mx="auto" mt={20} />
    <XboxTable data={data.data}></XboxTable>
    </>
  );
}
