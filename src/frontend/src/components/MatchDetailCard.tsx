import { Card, CardBody, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IMatch } from "../helpers/Types";

interface MatchDetailCardProps {
  match: IMatch;
  teamName: string;
}

export const MatchDetailCard: React.FC<MatchDetailCardProps> = ({
  match,
  teamName,
}) => {
  const otherTeam = teamName === match.team2 ? match.team1 : match.team2;

  return (
    <Card width="xl" bg="PowderBlue" marginY={2} variant="elevated">
      <CardBody>
        <VStack display={"flex"} justifyItems="center">
          <Link to={`/teams/${otherTeam}`}>
            <Text color="MintCream" textStyle="body">
              vs {otherTeam}
            </Text>
          </Link>
          <Text color="MintCream">
            {match.matchWinner} won by {match.resultMargin} {match.wonBy}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};
