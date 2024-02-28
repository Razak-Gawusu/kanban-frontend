import { reactive, ref } from "vue";

const boards = reactive([
  {
    id: 1,
    label: "Platform Launch",
    columns: [
      {
        id: 1,
        title: "Todo",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Doing",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Done",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Roadmap",
    columns: [
      {
        id: 1,
        title: "Todo",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Doing",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Done",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Marketing Plan",
    columns: [
      {
        id: 1,
        title: "Todo",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Doing",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Done",
        tasks: [
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
          {
            id: 1,
            title: "Build UI for onboarding flow",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subTasks: [
              {
                id: 1,
                title: "Research competitor pricing and business models",
              },
            ],
          },
        ],
      },
    ],
  },
]);

const activeBoard = ref<null | number>(0);
function setActiveBoard(id: number) {
  activeBoard.value = id;
}

export function useBoards() {
  return { boards, activeBoard, setActiveBoard };
}
