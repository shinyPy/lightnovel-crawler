import { Flex, Input } from 'antd';
import { type NovelListHook } from './hooks';

export const NovelFilterBox: React.FC<
  Pick<NovelListHook, 'search' | 'updateParams'>
> = ({ search: initialSearch, updateParams }) => {
  return (
    <Flex align="center">
      <Input.Search
        defaultValue={initialSearch}
        onSearch={(search) => updateParams({ search, page: 1 })}
        placeholder="Search novels"
        allowClear
        size="large"
      />
    </Flex>
  );
};
