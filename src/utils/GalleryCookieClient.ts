import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api'
import {cookies} from 'next/headers';

import { revalidatePath } from 'next/cache';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import config from '@/amplifyconfiguration.json';
import { CreatePostsInput, posts } from '@/API';

import post_data from '@/assets/data/posts.json'

const cookiesClient = generateServerClientUsingCookies({
    config, cookies
  })
  
  async function createPosts(formData: CreatePostsInput) {
    'use server';
  
    const { data } = await cookiesClient.graphql({
      query: mutations.createPosts,
      variables: {
        input: {
          title: formData.title?.toString() ?? '',
          type: formData.type?.toString() ?? '',
          url: formData.url?.toString() ?? '',
          year: formData.year?.toString() as unknown as number ?? (new Date()).getFullYear(),
          description: formData.description?.toString() ?? '',
          discipline: formData.discipline?.toString() ?? '',
          project: formData.project?.toString() ?? ''
        }
      }
    });
  
    console.log('created Post:', data?.createPosts);
  
    revalidatePath('/projects/gallery');
  
    /*
    const { data } = await cookiesClient.graphql({
      query: mutations.createPosts,
      variables: {
        input: {
          title: formData.get('title')?.toString() ?? '',
          type: formData.get('type')?.toString() ?? '',
          url: formData.get('url')?.toString() ?? '',
          year: formData.get('year')?.toString() as unknown as number ?? (new Date()).getFullYear(),
          description: formData.get('description')?.toString() ?? '',
          discipline: formData.get('discipline')?.toString() ?? '',
          project: formData.get('project')?.toString() ?? ''
        }
      }
    });
    */
  }
  
  async function post_multiple() {
    'use server'
    post_data.map((post) => {
      var entry: CreatePostsInput = post;
      createPosts(entry);
    })
  }

  export async function fetchPostsList() {
    const {data, errors} = await cookiesClient.graphql({
        query: queries.listPosts
    });

    const data_list: posts[] = data.listPosts.items
    return {data_list, errors};
  }