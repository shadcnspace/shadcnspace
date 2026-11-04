import { Label } from '@/components/ui/label'
import type { Option } from '@/components/ui/multi-select'
import MultipleSelector from '@/components/ui/multi-select'

const technologies: Option[] = [
  {
    value: 'frontend',
    label: 'Frontend Development'
  },
  {
    value: 'backend',
    label: 'Backend Development'
  },
  {
    value: 'fullstack',
    label: 'Full Stack'
  },
  {
    value: 'mobile',
    label: 'Mobile Development'
  },
  {
    value: 'ai_ml',
    label: 'AI & Machine Learning'
  },
  {
    value: 'data_science',
    label: 'Data Science'
  },
  {
    value: 'cloud',
    label: 'Cloud Computing'
  },
  {
    value: 'devops',
    label: 'DevOps'
  },
  {
    value: 'cybersecurity',
    label: 'Cybersecurity',
    disable: true
  },
  {
    value: 'blockchain',
    label: 'Blockchain'
  },
  {
    value: 'iot',
    label: 'Internet of Things (IoT)'
  },
  {
    value: 'ar_vr',
    label: 'AR / VR'
  },
  {
    value: 'game_dev',
    label: 'Game Development'
  },
  {
    value: 'web3',
    label: 'Web3',
    disable: true
  },
  {
    value: 'testing',
    label: 'Software Testing'
  },
  {
    value: 'ui_ux',
    label: 'UI / UX Design'
  }
]

const MultipleSelectWithPlaceholderDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label>Technology Preferences</Label>
      <MultipleSelector
        commandProps={{
          label: 'Select technologies'
        }}
        defaultOptions={technologies}
        placeholder='Select technologies'
        emptyIndicator={<p className='text-center text-sm'>No results found</p>}
        className='w-full'
      />
    </div>
  )
}

export default MultipleSelectWithPlaceholderDemo
